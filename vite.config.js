import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import imagemin from "unplugin-imagemin/vite";



export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},

			output: {
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",

				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "assets/images/[name]-[hash].webp";
					}

					if (/\.css$/.test(name ?? "")) {
						return "assets/css/[name]-[hash][extname]";
					}

					if (/\.(woff|woff2|ttf|eot)$/.test(name ?? "")) {
						return "assets/fonts/[name]-[hash][extname]";
					}

					if (/\.mov$/.test(name ?? "")) {
						return "assets/video/[name]-[hash][extname]";
					}

					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},

	plugins: [
		injectHTML({
			debug: {
				logPath: false,
			},
		}),
		// ViteImageOptimizer(imageOptimizerConfig),
		imagemin({
			mode: "sharp",
			compress: {
				jpg: {
					quality: 70,
				},
				jpeg: {
					quality: 70,
				},
				png: {
					quality: 70,
				},
				webp: {
					quality: 70,
				},
			},
			conversion: [
				{ from: "png", to: "webp" },
				{ from: "jpeg", to: "webp" },
				{ from: "jpg", to: "webp" },
			],
		}),
	],
};
