import React, { Suspense } from "react";
import FamousBook from "../Components/FamousBook";
import RatingFrom from "../Components/RatingForm";
import Loader from "../Components/Loader";
import Testimonial from "../Components/Testimonial";
const Table = React.lazy(() => import("../Components/Table"));
function MainPage() {
  return (
    <div>
      <FamousBook />
      <RatingFrom />
      <Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        <Table />
      </Suspense>
      <Testimonial />
    </div>
  );
}

export default MainPage;
