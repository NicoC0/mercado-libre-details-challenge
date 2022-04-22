import React from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // Imágenes que se muestran en el slider
  const photos = [
    "https://http2.mlstatic.com/D_NQ_621763-MLA49451238712_032022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_975247-MLA49451102649_032022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_651344-MLA49546120685_042022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_872543-MLA49450871451_032022-OO.webp",
  ];

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });



  return (
    <Box h="340px" overflow="hidden" position="relative">
      <link
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Slider */}
      {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photos.map((photo) => (
          <Box
            key={photo}
            backgroundImage={`url(${photo})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            height="340px"
            position="relative"
            cursor="pointer"
          />
        ))}
      </Slider>
    </Box>
  );
}
