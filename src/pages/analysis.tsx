import Board from "@/sections/analysis/board";
import PanelHeader from "@/sections/analysis/panelHeader";
import PanelToolBar from "@/sections/analysis/panelToolbar";
import AnalysisTab from "@/sections/analysis/panelBody/analysisTab";
import ClassificationTab from "@/sections/analysis/panelBody/classificationTab";
import SummaryTab from "@/sections/analysis/panelBody/summaryTab";
import LessonsTab from "@/sections/analysis/panelBody/lessonsTab";
import {
  boardAtom,
  gameAtom,
  gameEvalAtom,
  tabAtom,
} from "@/sections/analysis/states";
import {
  Box,
  Divider,
  Grid2 as Grid,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import EngineSettingsButton from "@/sections/engineSettings/engineSettingsButton";
import { PageTitle } from "@/components/pageTitle";

export default function GameAnalysis() {
  const theme = useTheme();
  const [tab, setTab] = useAtom(tabAtom);
  const [hasOpenedReview, setHasOpenedReview] = useState(false);
  const isLgOrGreater = useMediaQuery(theme.breakpoints.up("lg"));

  const gameEval = useAtomValue(gameEvalAtom);
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);

  const showMovesTab = game.history().length > 0 || board.history().length > 0;
  const showReviewTab = !!gameEval;

  useEffect(() => {
    if (showReviewTab && !hasOpenedReview) {
      setTab(0);
      setHasOpenedReview(true);
      return;
    }

    if (!showReviewTab && hasOpenedReview) {
      setHasOpenedReview(false);
    }

    if (tab === 1 && !showMovesTab) {
      setTab(showReviewTab ? 0 : 2);
    } else if (tab === 0 && !showReviewTab) {
      setTab(showMovesTab ? 1 : 2);
    } else if (tab === 3 && !showReviewTab) {
      setTab(showMovesTab ? 1 : 2);
    }
  }, [hasOpenedReview, showMovesTab, showReviewTab, tab, setTab]);

  return (
    <Grid container gap={4} justifyContent="space-evenly" alignItems="start">
      <PageTitle title="Chesskit Game Analysis" />

      <Board />

      <Grid
        container
        justifyContent="start"
        alignItems="center"
        borderRadius={3}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1a1a1e" : "#f8f8fa",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(0, 0, 0, 0.06)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.35)"
              : "0 8px 32px rgba(29, 36, 44, 0.08)",
          overflow: "hidden",
        }}
        padding={{ xs: 1.25, sm: 2.25 }}
        style={{
          maxWidth: "1200px",
        }}
        rowGap={1.75}
        height={{ xs: tab === 1 ? "40rem" : "auto", lg: "calc(95vh - 60px)" }}
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        size={{
          xs: 12,
          lg: "grow",
        }}
      >
        {isLgOrGreater ? (
          <Box width="100%">
            <PanelHeader key="analysis-panel-header" />
            <Divider sx={{ marginTop: 2, opacity: 0.65 }} />
          </Box>
        ) : (
          <PanelToolBar key="review-panel-toolbar" />
        )}

        {!isLgOrGreater && !gameEval && <Divider sx={{ marginX: "5%" }} />}
        {!isLgOrGreater && !gameEval && (
          <PanelHeader key="analysis-panel-header" />
        )}

        <Box
          width="100%"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            aria-label="analysis panel tabs"
            variant="fullWidth"
            sx={{ minHeight: 0 }}
          >
            <Tab
              label="Review"
              id="tab0"
              icon={<Icon icon="mdi:star-circle" height={15} />}
              iconPosition="start"
              sx={{
                textTransform: "none",
                minHeight: 15,
                display: showReviewTab ? undefined : "none",
                padding: "5px 0em 12px",
              }}
              disableFocusRipple
            />

            <Tab
              label="Moves"
              id="tab1"
              icon={<Icon icon="mdi:format-list-bulleted" height={15} />}
              iconPosition="start"
              sx={{
                textTransform: "none",
                minHeight: 15,
                display: showMovesTab ? undefined : "none",
                padding: "5px 0em 12px",
              }}
              disableFocusRipple
            />

            <Tab
              label="Lines"
              id="tab2"
              icon={<Icon icon="mdi:chart-timeline-variant" height={15} />}
              iconPosition="start"
              sx={{
                textTransform: "none",
                minHeight: 15,
                padding: "5px 0em 12px",
              }}
              disableFocusRipple
            />

            <Tab
              label="Lessons"
              id="tab3"
              icon={<Icon icon="mdi:school" height={15} />}
              iconPosition="start"
              sx={{
                textTransform: "none",
                minHeight: 15,
                display: showReviewTab ? undefined : "none",
                padding: "5px 0em 12px",
              }}
              disableFocusRipple
            />
          </Tabs>
        </Box>

        {tab === 0 && showReviewTab && (
          <SummaryTab role="tabpanel" id="tabContent0" />
        )}

        {tab === 1 && <ClassificationTab role="tabpanel" id="tabContent1" />}

        {tab === 2 && <AnalysisTab role="tabpanel" id="tabContent2" />}

        {tab === 3 && showReviewTab && (
          <LessonsTab role="tabpanel" id="tabContent3" />
        )}

        {isLgOrGreater && (
          <Box width="100%">
            <Divider sx={{ marginBottom: 1.5, opacity: 0.65 }} />
            <PanelToolBar key="review-panel-toolbar" />
          </Box>
        )}

        {!isLgOrGreater && gameEval && (
          <Box width="100%">
            <Divider sx={{ marginX: "5%", marginBottom: 2.5 }} />
            <PanelHeader key="analysis-panel-header" />
          </Box>
        )}
      </Grid>

      <EngineSettingsButton />
    </Grid>
  );
}
