import React from "react";
import ImageGallery from "react-image-gallery";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
function showGallery(items) {
  return <ImageGallery items={items} autoPlay={true} />;
}

function Information({ items }) {
  return (
    <>
      <h1>About us</h1>
      <p>
        Tucked inside the historic Payne Whitney mansion, Albertine is the only
        bookshop in New York devoted solely to books in French and English with
        more than 14,000 contemporary and classic titles from 30 French-speaking
        countries. As an integral part of the Cultural Services of the French
        Embassy, the Albertine bookshop brings to life the French government’s
        commitment to French-American intellectual exchange. The space reflects
        its belief in the power of literature and the humanities to increase
        understanding and friendship across borders, and in the power of books
        as a common good for a better world. In partnership with the Cultural
        Services, Albertine hosts lively debates and discussions exploring
        popular and classical culture through a modern and global lens. French
        books at Albertine comply with the French law that states that book
        prices cannot be reduced more than 5 percent. Fixed book prices protect
        a rich network of publishers and booksellers in France and nourish its
        “biblio-diversity”
      </p>
      <br />
      {showGallery(items)}
      <section id="mu-map">
        <div
          class="mapouter"
          style={{
            position: "relative",
            textAlign: center,
            height: 100,
            width: 100,
          }}
        >
          <div
            class="gmap_canvas"
            style={{
              height: 100,
              width: 100,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              allowfullscreen
              id="gmap_canvas"
              src="https://www.google.com/maps/place/Bauman+Rare+Books/data=!4m7!3m6!1s0x89c258fb1c681dbd:0xe047f20bcce0dbfa!8m2!3d40.7604954!4d-73.9731882!16s%2Fg%2F1xtf2h10!19sChIJvR1oHPtYwokR-tvgzAvyR-A?authuser=0&hl=sr&rclk=1"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://2piratebay.org"></a>
            {/* <br><style>.mapouter{position:relative;text-align:center;height:100%;width:100%;}</style> */}
            <a href="https://www.embedgooglemap.net">google map website</a>
            {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Information;
