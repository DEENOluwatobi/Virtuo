"use client";
import React, { useEffect, useState } from "react";
import Frame from "../../features/Frame/Frame";
import BodyLayout from "@app/features/GetStarted/components/BodyLayout";

const StudentID = (context) => {
  const studentId = context.searchParams.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://virtuo-api.onrender.com/accounts/${studentId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [studentId]);
console.log(data);
  return (
    <div className="w-full">
      <BodyLayout>
        {/* Pass 'data' as a prop to the Frame component */}
        <Frame data={data} />
      </BodyLayout>
    </div>
  );
};

export default StudentID;
