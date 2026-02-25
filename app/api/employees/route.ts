import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/src/core/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      nationalCode,
      phone,
      address,
      imageUrl,
      position,
      department,
      employmentType,
      startDate,
      salary,
      educations,
    } = body;

    const supabase = await createClient();

    const { data: employee, error: employeeError } = await supabase
      .from("employees")
      .insert({
        first_name: firstName,
        last_name: lastName,
        national_code: nationalCode,
        phone,
        address,
        image_url: imageUrl,
        position,
        department,
        employment_type: employmentType,
        start_date: startDate,
        salary,
      })
      .select()
      .single();

    if (employeeError) {
      console.error("Employee insert error:", employeeError);
      return NextResponse.json(
        { error: "Failed to create employee", details: employeeError.message },
        { status: 500 }
      );
    }

    if (educations && educations.length > 0) {
      const educationRecords = educations.map((edu: any) => ({
        employee_id: employee.id,
        degree: edu.degree,
        field: edu.field,
        university: edu.university,
        gpa: edu.gpa,
        certificate_url: edu.certificateUrl,
      }));

      const { error: educationError } = await supabase
        .from("employee_educations")
        .insert(educationRecords);

      if (educationError) {
        console.error("Education insert error:", educationError);
        return NextResponse.json(
          { error: "Failed to create education records", details: educationError.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Employee created successfully",
      data: employee,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
