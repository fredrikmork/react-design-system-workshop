import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
// https://vite.dev/config/
export default defineConfig({
    build: {
        //Specifies that the output of the build will be a library.
        lib: {
            //Defines the entry point for the library build. It resolves
            //to src/index.ts,indicating that the library starts from this file.
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "helenes-designsystem",
            //A function that generates the output file
            //name for different formats during the build
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        //Generates sourcemaps for the built files,
        //aiding in debugging.
        sourcemap: true,
        //Clears the output directory before building.
        emptyOutDir: true,
        cssCodeSplit: false, // lite triks for å få med css i bygget
    },
    //react() enables React support.
    //dts() generates TypeScript declaration files (*.d.ts)
    //during the build.
    plugins: [react(), dts(), tailwindcss()],
});
