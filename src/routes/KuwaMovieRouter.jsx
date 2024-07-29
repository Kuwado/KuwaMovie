import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MediaPage from "../pages/MediaPage";
import MediaDetailPage from "../pages/MediaDetailPage";

const KuwaMovieRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MediaPage type={'movie'} />} />
            <Route path="/tvs" element={<MediaPage type={'tv'} />} />
            <Route path="/movie/:id" element={<MediaDetailPage type={'movie'} />} />
            <Route path="/tv/:id" element={<MediaDetailPage type={'tv'} />} />
        </Routes>
    )
}

export default KuwaMovieRouter