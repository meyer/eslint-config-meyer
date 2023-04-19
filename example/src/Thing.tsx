export interface ThingProps {
  children: React.ReactNode;
}

export const Thing: React.FC<ThingProps> = (props) => <div {...props} />;
