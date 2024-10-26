import { FC } from "react";

interface VideoGridProps {
  session: any;
}

const VideoGrid: FC<VideoGridProps> = ({ session }) => {
  const videos = [
    { id: 1, title: "Video de ropa", category: "Ropa", url: "/path/to/video1" },
    { id: 2, title: "Video de zapatos", category: "Zapatos", url: "/path/to/video2" },
    // Agrega más videos de ejemplo aquí
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full max-w-6xl">
      {videos.map((video) => (
        <div key={video.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <video src={video.url} controls className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{video.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">Categoría: {video.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
