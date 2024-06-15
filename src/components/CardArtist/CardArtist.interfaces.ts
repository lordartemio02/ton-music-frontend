export type CardArtistProps = {
  buttons: [
    CardArtistButtonsProps,
    CardArtistButtonsProps,
    CardArtistButtonsProps
  ];
  name: string;
  countPlays: number;
  avatar?: string;
};

type CardArtistButtonsProps = {
  onClick: () => void;
  icon: JSX.Element;
  text: string;
};
