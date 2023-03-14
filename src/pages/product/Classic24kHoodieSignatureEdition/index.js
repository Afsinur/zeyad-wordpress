import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const Classic24kHoddieSignatureEditrion = () => {
  let imgDataArr = [
    {
      name_: "Classic 24k Hoodie Signature Edition",
      price_: "$124.24",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "M", " L"],

      dtImgArr: [
        {
          src: `/img/customize/Classic24kHoddieSignatureEditrion/1.jpg`,
        },
        {
          src: `/img/customize/Classic24kHoddieSignatureEditrion/2.jpg`,
        },
        {
          src: `/img/customize/Classic24kHoddieSignatureEditrion/3.jpg`,
        },
        {
          src: `/img/customize/Classic24kHoddieSignatureEditrion/4.jpg`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        {imgDataArr.map((itm, i) => (
          <Customize itm={itm} key={i} />
        ))}
        <RelatedViewCollection />
        <Footer />
      </main>
    </>
  );
};

export default Classic24kHoddieSignatureEditrion;
