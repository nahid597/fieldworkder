import { app } from "./app";

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Work Order server running on port ${PORT}`);
});