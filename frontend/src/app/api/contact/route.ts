import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          message:
            "Todos los campos son obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    if (
			typeof name !== "string" ||
			typeof email !== "string" ||
			typeof subject !== "string" ||
			typeof message !== "string"
			) {
			return NextResponse.json(
					{
					message: "Datos inválidos.",
					},
					{
					status: 400,
					}
			);
    }

		if (name.length > 100) {
			return NextResponse.json(
				{
					message: "Nombre demasiado largo.",
				},
				{
					status: 400,
				}
			);
		}

		if (subject.length > 200) {
			return NextResponse.json(
				{
					message: "Asunto demasiado largo.",
				},
				{
					status: 400,
				}
			);
		}

		if (message.length > 5000) {
			return NextResponse.json(
				{
					message: "Mensaje demasiado largo.",
				},
				{
					status: 400,
				}
			);
		}

    console.log({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      message: "Mensaje recibido correctamente.",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        message:
          "Error procesando la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}