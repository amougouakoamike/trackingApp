const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const projectRoot = __dirname;
config.projectRoot = projectRoot;
config.watchFolders = [projectRoot];

// Configure source and asset extensions
config.resolver.sourceExts = [...config.resolver.sourceExts, "png", "jpg", "jpeg"];
config.resolver.assetExts = [...config.resolver.assetExts.filter(ext => ext !== "png"), "png", "jpg", "jpeg"];

// Handle @ alias using extraNodeModules
config.resolver.extraNodeModules = {
  "@": path.resolve(projectRoot),
};

module.exports = withNativewind(config);