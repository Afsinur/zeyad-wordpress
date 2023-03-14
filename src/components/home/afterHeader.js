import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PrintOneImgBox from "./PrintOneImgBox";

const AfterHeaderDiv = styled.div`
  width: 100%;
  padding-top: 70px;

  .img-container {
    width: 100%;
    padding: 10px 0;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  picture {
    position: relative;
  }

  picture::after {
    position: absolute;
    content: "OCTOBER'S VERY OWN CLASSIC COLLECTION";
    bottom: -16px;
    left: 0;

    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const AfterHeader = () => {
  let imgDataArr = [
    {
      onLoadImg: "/img/heroHover/heroimg01.jpg",
      onHoverImg: "/img/heroHover/hoverHeroimg01.jpg",
      onLoadTitle: "24k classic collection",
      onLoadSubTitles: "",
      hoverSubTitles: [""],
    },
    {
      onLoadImg: "/img/heroHover/heroimg02.jpg",
      onHoverImg: "/img/heroHover/hoverHeroimg02.jpg",
      onLoadTitle: "",
      onLoadSubTitles: "",
      hoverSubTitles: [""],
    },
  ];
  return (
    <AfterHeaderDiv>
      <div className="img-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={1.3}
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            {imgDataArr.map((obj, i) => (
              <Grid item sm={6} md={3} key={i}>
                <div className="single-img-container">
                  <PrintOneImgBox obj={obj} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={1.3}>
          <Grid item xs={12}>
            <p className="dynamic-bracket" style={{ padding: "10px" }}>
              Atlanta (24ºc)
            </p>
          </Grid>

          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </AfterHeaderDiv>
  );
};

export default AfterHeader;
