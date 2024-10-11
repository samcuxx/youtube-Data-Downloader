import { FaCoffee } from "react-icons/fa";

export default function Footer() {
  const relatedTools = [
    {
      name: "YouTube Thumbnail Downloader",
      description: "Download high-quality thumbnails",
    },
    { name: "YouTube Tag Extractor", description: "Extract video tags easily" },
  ];

  return (
    <footer className="mt-12 border-t pt-8">
      <div className="flex justify-center mb-8">
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          <FaCoffee />
          <span>Buy me a coffee</span>
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Related Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          {relatedTools.map((tool, index) => (
            <div key={index} className="bg-card p-4 rounded-md">
              <h3 className="font-semibold text-text">{tool.name}</h3>
              <p className="text-sm text-textSecondary mb-2">
                {tool.description}
              </p>
              <button className="text-textSecondary hover:text-text">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
