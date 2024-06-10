/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { data } from "./data";
import { ResponsivePie } from "@nivo/pie";
import Header from "../../components/Header";

export default function PieChart({ isDashboard = true }) {
  const theme = useTheme();
  const barTheme = {
    text: {
      fontSize: 11,
      fill: theme.palette.text.primary,
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      ticks: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: theme.palette.divider,
        strokeWidth: 1,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: theme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: theme.palette.text.primary,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      wrapper: {},
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        fontSize: 12,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  return (
    <Box
      sx={{
        height: isDashboard ? 250 : 600,
        width: "98%",
        mx: "auto",
        overflow: "hiden",
      }}
    >
      {!isDashboard && (
        <Header title="Pie Chart" subTitle="Frequently Asked Questions Page" />
      )}
      {isDashboard ? (
        <ResponsivePie
          enableArcLabels={false}
          enableArcLinkLabels={false}
          theme={barTheme}
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          innerRadius={0.7}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
        />
      ) : (
        <ResponsivePie
          theme={barTheme}
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "react",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "react",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: theme.palette.text.primary,
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: theme.palette.text.secondary,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </Box>
  );
}
