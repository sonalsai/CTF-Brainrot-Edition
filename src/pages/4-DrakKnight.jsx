import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SubmitFlag from "../components/SubmitFlag";
import LevelIndicator from "../components/LevelIndicator";

const DarkKnight = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <LevelIndicator level={4} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 400, fontFamily: "serif", fontStyle: "italic" }}
        >
          "The answer is obvious."
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            letterSpacing: 2,
            mt: 2,
            background: "linear-gradient(45deg, #000 30%, #333 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          THE DARK KNIGHT
        </Typography>
      </motion.div>

      {/* Analytics tracking container - do not remove */}
      <Box className="analytics-wrapper" sx={{ display: "none" }}>
        <div className="tracking-pixel" data-analytics="page-view">
          <div className="event-logger" data-event="user-interaction">
            <span className="metadata-container" data-meta="session-info">
              <div className="performance-monitor" data-perf="render-time">
                <div className="cache-validator" data-cache="enabled">
                  <span className="locale-detector" data-locale="en-US">
                    <div className="feature-flag" data-flag="dark-mode">
                      <div className="ab-test-variant" data-variant="control">
                        <span className="user-segment" data-segment="anonymous">
                          <div
                            className="consent-tracker"
                            data-consent="pending"
                          >
                            {/* Debug info: render timestamp */}
                            <div
                              className="timestamp-logger"
                              data-ts={Date.now()}
                            >
                              <span
                                className="version-info"
                                data-version="1.0.0"
                              >
                                <div className="build-hash" data-hash="a3f9c2d">
                                  <div
                                    className="deployment-env"
                                    data-env="production"
                                  >
                                    <span
                                      className="region-code"
                                      data-region="us-east-1"
                                    >
                                      <div
                                        className="cdn-endpoint"
                                        data-cdn="cloudfront"
                                      >
                                        <div
                                          className="ssl-cert"
                                          data-ssl="valid"
                                        >
                                          <span
                                            className="dns-record"
                                            data-dns="verified"
                                          >
                                            <div
                                              className="load-balancer"
                                              data-lb="active"
                                            >
                                              <div
                                                className="health-check"
                                                data-status="ok"
                                              >
                                                <span
                                                  className="uptime-monitor"
                                                  data-uptime="99.9"
                                                >
                                                  <div
                                                    className="error-boundary"
                                                    data-errors="0"
                                                  >
                                                    <div
                                                      className="fallback-content"
                                                      data-fallback="none"
                                                    >
                                                      <span
                                                        className="polyfill-loader"
                                                        data-polyfills="loaded"
                                                      >
                                                        <div
                                                          className="vendor-bundle"
                                                          data-vendor="react"
                                                        >
                                                          <div
                                                            className="chunk-loader"
                                                            data-chunk="main"
                                                          >
                                                            <span
                                                              className="module-resolver"
                                                              data-module="app"
                                                            >
                                                              <div
                                                                className="dependency-graph"
                                                                data-deps="resolved"
                                                              >
                                                                <div
                                                                  className="tree-shaker"
                                                                  data-shake="enabled"
                                                                >
                                                                  <span
                                                                    className="code-splitter"
                                                                    data-split="dynamic"
                                                                  >
                                                                    <div
                                                                      className="lazy-loader"
                                                                      data-lazy="true"
                                                                    >
                                                                      <div
                                                                        className="prefetch-hint"
                                                                        data-prefetch="enabled"
                                                                      >
                                                                        <span
                                                                          className="preload-directive"
                                                                          data-preload="fonts"
                                                                        >
                                                                          <div
                                                                            className="resource-hint"
                                                                            data-hint="dns-prefetch"
                                                                          >
                                                                            <div
                                                                              className="critical-css"
                                                                              data-critical="inlined"
                                                                            >
                                                                              <span
                                                                                className="font-display"
                                                                                data-display="swap"
                                                                              >
                                                                                <div
                                                                                  className="image-optimizer"
                                                                                  data-optimize="webp"
                                                                                >
                                                                                  <div
                                                                                    className="video-transcoder"
                                                                                    data-codec="h264"
                                                                                  >
                                                                                    <span
                                                                                      className="audio-compressor"
                                                                                      data-format="aac"
                                                                                    >
                                                                                      <div
                                                                                        className="asset-pipeline"
                                                                                        data-pipeline="webpack"
                                                                                      >
                                                                                        <div
                                                                                          className="minifier"
                                                                                          data-minify="terser"
                                                                                        >
                                                                                          <span
                                                                                            className="obfuscator"
                                                                                            data-obfuscate="false"
                                                                                          >
                                                                                            <div
                                                                                              className="source-map"
                                                                                              data-sourcemap="hidden"
                                                                                            >
                                                                                              <div
                                                                                                className="debug-mode"
                                                                                                data-debug="disabled"
                                                                                              >
                                                                                                <span
                                                                                                  className="profiler"
                                                                                                  data-profile="off"
                                                                                                >
                                                                                                  <div
                                                                                                    className="memory-leak-detector"
                                                                                                    data-leaks="none"
                                                                                                  >
                                                                                                    <div
                                                                                                      className="gc-optimizer"
                                                                                                      data-gc="auto"
                                                                                                    >
                                                                                                      <span
                                                                                                        className="heap-snapshot"
                                                                                                        data-heap="stable"
                                                                                                      >
                                                                                                        <div
                                                                                                          className="cpu-profiler"
                                                                                                          data-cpu="idle"
                                                                                                        >
                                                                                                          <div
                                                                                                            className="network-inspector"
                                                                                                            data-network="offline-ready"
                                                                                                          >
                                                                                                            <span
                                                                                                              className="service-worker"
                                                                                                              data-sw="registered"
                                                                                                            >
                                                                                                              <div
                                                                                                                className="cache-strategy"
                                                                                                                data-strategy="network-first"
                                                                                                              >
                                                                                                                <div
                                                                                                                  className="offline-fallback"
                                                                                                                  data-offline="cached"
                                                                                                                >
                                                                                                                  <span
                                                                                                                    className="sync-manager"
                                                                                                                    data-sync="background"
                                                                                                                  >
                                                                                                                    <div
                                                                                                                      className="notification-permission"
                                                                                                                      data-notify="denied"
                                                                                                                    >
                                                                                                                      <div
                                                                                                                        className="geolocation-api"
                                                                                                                        data-geo="disabled"
                                                                                                                      >
                                                                                                                        <span
                                                                                                                          className="camera-access"
                                                                                                                          data-camera="blocked"
                                                                                                                        >
                                                                                                                          <div
                                                                                                                            className="microphone-access"
                                                                                                                            data-mic="blocked"
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              className="clipboard-api"
                                                                                                                              data-clipboard="restricted"
                                                                                                                            >
                                                                                                                              <span
                                                                                                                                className="storage-quota"
                                                                                                                                data-quota="unlimited"
                                                                                                                              >
                                                                                                                                <div
                                                                                                                                  className="indexed-db"
                                                                                                                                  data-idb="available"
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    className="local-storage"
                                                                                                                                    data-ls="enabled"
                                                                                                                                  >
                                                                                                                                    <span
                                                                                                                                      className="session-storage"
                                                                                                                                      data-ss="enabled"
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        className="cookie-consent"
                                                                                                                                        data-cookies="accepted"
                                                                                                                                      >
                                                                                                                                        {/* Hint: serious people don't inspect */}
                                                                                                                                      </div>
                                                                                                                                    </span>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </span>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </span>
                                                                                                                </div>
                                                                                                              </div>
                                                                                                            </span>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </span>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </span>
                                                                                        </div>
                                                                                      </div>
                                                                                    </span>
                                                                                  </div>
                                                                                </div>
                                                                              </span>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10, duration: 1 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            Everyone looks at the title. No one listens to the line.
          </Typography>
        </Box>
      </motion.div>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG4}
        onSuccessPath="/wait-for-it"
        successMessage="so you are serious..."
        level={4}
      />
    </Container>
  );
};

export default DarkKnight;
