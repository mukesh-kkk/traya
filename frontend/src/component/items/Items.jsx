import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ShopCard from "../card/Card";
import axios from "axios";
import { getProducts, updateProducts } from "../../api";
import PopupModal from "../popup/Popup";
export default function Items() {
  const user = useSelector((state) => state.userReducer.user);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    axios
      .get(getProducts)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);
  const handleClickOk = (dataRecieved) => {
    setData((prev) => {
      return prev.map((each) => {
        if (each._id === selectedItem._id) {
          return {
            ...each,
            ...dataRecieved,
          };
        } else {
          return each;
        }
      });
    });
    axios.patch(updateProducts, { ...dataRecieved, _id: selectedItem?._id });
    setOpenModal(false);
  };
  console.log(data);
  return (
    <>
      {openModal && (
        <PopupModal
          open={openModal}
          data={selectedItem}
          onClose={() => setOpenModal(false)}
          onOk={handleClickOk}
        ></PopupModal>
      )}
      <p
        style={{
          marginLeft: "32px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333333",
        }}
      >
        Provide Feedback!
      </p>
      <div style={{ marginLeft: "32px", marginRight: "32px" }}>
        <Grid container spacing={2}>
          {data.map((each, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ShopCard
                image={each.image}
                title={each.name}
                description={each.description}
                rating={each.rating ? each.rating : 0}
                feedback={each.feedback}
                onClick={() => {
                  setSelectedItem(each);
                  setOpenModal(true);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
