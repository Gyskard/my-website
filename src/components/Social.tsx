import Link from "next/link";

interface Media {
  name: string;
  icon: string;
  url: string;
}

interface Props {
  list?: Array<string>;
}

const medias: Array<Media> = [
  {
    name: "Linkedin",
    icon: "icon-[tabler--brand-linkedin]",
    url: "https://www.linkedin.com/in/thomas-margueritat",
  },
  {
    name: "Github",
    icon: "icon-[tabler--brand-github]",
    url: "https://github.com/Gyskard",
  },
  {
    name: "Instagram",
    icon: "icon-[tabler--brand-instagram]",
    url: "https://www.instagram.com/thomas.margueritat",
  },
  {
    name: "Flickr",
    icon: "icon-[tabler--brand-flickr]",
    url: "https://www.flickr.com/photos/thomas-margueritat",
  },
  {
    name: "Facebook",
    icon: "icon-[tabler--brand-facebook]",
    url: "https://www.facebook.com/thomas.margueritat.42/",
  },
];

export default function Social(props: Props) {
  return (
    <div className="flex justify-center w-full flex-wrap gap-2 mt-5">
      {medias
        // if there no list props, display all the medias
        // if there is a list props, display only the media in the list
        .filter(
          (media: Media) => !props.list || props.list.includes(media.name),
        )
        .map((media: Media, index) => (
          <Link key={index} href={media.url}>
            <button className="btn btn-sm btn-outline text-[#b5b5b5] hover:border-[#b5b5b5] hover:bg-[#b5b5b5]/10">
              <span className={media.icon} />
              {media.name}
            </button>
          </Link>
        ))}
    </div>
  );
}
