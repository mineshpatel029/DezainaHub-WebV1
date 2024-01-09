import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { ClickAwayListener } from "@mui/material";
import { useEffect, useState } from "react";
import Offerimg from "./Discount.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const PopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pop-up-x6pg.onrender.com/banner"
        );

        console.log(response.data);

        setData(response.data);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };

    fetchData();

    console.log(data);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <button
          className="Offersec"
          style={{
            // width: "100px",
            backgroundColor: "#ffff",
            zIndex: "9999",
            position: "fixed",
            top: "84.4%",
            left: "89.7%",
            border: "0px solid",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            marginLeft: "1px",
            boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
          }}
        >
          <button
            aria-describedby={id}
            type="button"
            onClick={handleClick}
            style={{
              zIndex: "9999",
              position: "fixed",
              top: "85%",
              left: "90%",
              backgroundColor: "#fff",
              border: "0px solid",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={Offerimg} alt="offerSvg" style={{ width: "90%" }} />
          </button>
        </button>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="top-end"
          style={{ zIndex: "2", width: "15%" }}
        >
          <Box
            sx={{
              border: 1,
              p: 1,
              bgcolor: "white",
              height: "20rem",
              border: "0px solid",
              borderRadius: "10px",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)",
              boxShadow: "0px -5px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
        //       pagination={{
        //       clickable: true,
        // }}
        navigation={true}
        modules={[  Navigation]}
        className="mySwiper"
      >

            {data?.map((item) => (
        <SwiperSlide>
              <div className="class" key={item.id}>
                {item.text}
                <img src={item.cloudinaryUrl} alt=",jbjh"  style={{backgroundColor:"black", width:"20px"}}/>
              </div>
            </SwiperSlide>
            ))}
            </Swiper>
          </Box>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default PopOver;
