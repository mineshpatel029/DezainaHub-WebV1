import { ClickAwayListener } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Offerimg from "./Discount.svg";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import styled from "styled-components";
import { fetchData } from "../../Redux/offerSlice";
import { Link } from "react-router-dom";

const PopOver = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchData());
    // console.log(data.length)
    console.log(data)
  }, [dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  const dataLength = data.length;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  if (dataLength === 0) {
    return;
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <PopperButton aria-describedby={id} type="button" onClick={handleClick}>
          <button>
            <img src={Offerimg} alt="offerSvg" style={{ width: "90%" }} />
          </button>
        </PopperButton>

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="top-end"
          sx={{
            width: "20%",
            zIndex: "9",
            height: "380px",
            "@media (min-width: 375px) and (max-width: 425px)": {
              width: "80%",
            },

            "@media (min-width: 426px) and (max-width: 600px)": {
              width: "60%",
            },

            "@media (min-width: 601px) and (max-width: 750px)": {
              width: "50%",
            },

            "@media (min-width: 751px) and (max-width: 1199px)": {
              width: "40%",
            },

            "@media (min-width: 1200px) and (max-width: 1440px)": {
              width: "25%",
            },
          }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{
                  border: "0px solid",
                  height: "375px",
                  backgroundColor: "#fff",
                  padding: "9px",
                  borderRadius: "20px 20px 0px 20px",
                  boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.map((item) => (
                    <SwiperSlide>
                      <ContentImage
                        src={item.cloudinaryUrl}
                        alt="offersimg"
                        width="100%"
                        height="355px"
                        style={{
                          border: "0px solid",
                          borderRadius: "20px 20px 0px 20px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                  <CloseButton onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM11.4075 10.3425C11.4778 10.4122 11.5336 10.4952 11.5717 10.5866C11.6097 10.678 11.6294 10.776 11.6294 10.875C11.6294 10.974 11.6097 11.072 11.5717 11.1634C11.5336 11.2548 11.4778 11.3378 11.4075 11.4075C11.3378 11.4778 11.2548 11.5336 11.1634 11.5717C11.072 11.6097 10.974 11.6293 10.875 11.6293C10.776 11.6293 10.678 11.6097 10.5866 11.5717C10.4952 11.5336 10.4122 11.4778 10.3425 11.4075L9 10.0575L7.6575 11.4075C7.58778 11.4778 7.50483 11.5336 7.41344 11.5717C7.32204 11.6097 7.22401 11.6293 7.125 11.6293C7.02599 11.6293 6.92797 11.6097 6.83657 11.5717C6.74518 11.5336 6.66223 11.4778 6.5925 11.4075C6.52221 11.3378 6.46641 11.2548 6.42833 11.1634C6.39026 11.072 6.37065 10.974 6.37065 10.875C6.37065 10.776 6.39026 10.678 6.42833 10.5866C6.46641 10.4952 6.52221 10.4122 6.5925 10.3425L7.9425 9L6.5925 7.6575C6.45128 7.51627 6.37193 7.32473 6.37193 7.125C6.37193 6.92527 6.45128 6.73373 6.5925 6.5925C6.73373 6.45127 6.92528 6.37193 7.125 6.37193C7.32473 6.37193 7.51628 6.45127 7.6575 6.5925L9 7.9425L10.3425 6.5925C10.4837 6.45127 10.6753 6.37193 10.875 6.37193C11.0747 6.37193 11.2663 6.45127 11.4075 6.5925C11.5487 6.73373 11.6281 6.92527 11.6281 7.125C11.6281 7.32473 11.5487 7.51627 11.4075 7.6575L10.0575 9L11.4075 10.3425Z"
                        fill="white"
                      />
                    </svg>
                  </CloseButton>
                  <Link to={"/ContactUs"}>
                    <TouchButton>Get In Touch</TouchButton>
                  </Link>
                </Swiper>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default PopOver;

const PopperButton = styled.button`
  width: 60px;
  border: 0px solid;
  border-radius: 50%;
  height: 60px;
  position: fixed;
  top: 90%;
  left: 90%;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);

  button {
    z-index: 9999;
    background-color: #fff;
    border: 0px solid;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    left: 80%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  left: 2%;
  bottom: 93%;
  z-index: 99;
  cursor: pointer;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 20px 20px 0px 20px;
`;

const TouchButton = styled.button`
  width: 30%;
  padding: 2px;
  border: 0px solid;
  border-radius: 5px;
  box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  background-color: #fff;
  color: #1e1e1e;
  z-index: 999;
  position: absolute;
  bottom: 7%;
  left: 33%;
`;
