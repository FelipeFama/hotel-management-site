import { NextResponse } from "next/server";
import Stripe from "stripe";
import { RequestData } from "../stripe/route";
import { createBooking, updateHotelRoom } from "@/libs/apis";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  //console.log(event);

  //load our event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;

      // Create a booking
      const {
        // @ts-ignore
        metadata: {
          adults,
          checkinDate,
          checkoutDate,
          children,
          hotelRoom,
          numberOfDays,
          user,
          discount,
          totalPrice,
        },
      }: RequestData = session as unknown as RequestData;

      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      // Update hotel Room
      await updateHotelRoom(hotelRoom);

      return NextResponse.json("Booking sucessful", {
        status: 200,
        statusText: "Booking Successful",
      });

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json("Booking successful", {
    status: 200,
    statusText: "Event received",
  });
}
