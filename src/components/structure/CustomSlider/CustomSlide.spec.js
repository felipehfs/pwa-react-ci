import { render } from "@testing-library/react";
import CustomSlider from ".";

const arts = [
  { id: 1, cover: "https://randomuser.me/api/portraits/women/73.jpg" },
  { id: 2, cover: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 3, cover: "https://randomuser.me/api/portraits/men/39.jpg" },
  { id: 4, cover: "https://randomuser.me/api/portraits/women/66.jpg" },
  { id: 5, cover: "https://randomuser.me/api/portraits/women/55.jpg" },
];

describe('#CustomSlide', () => {

  test('should the ui be the same', () => {
    const { asFragment } = render(<CustomSlider items={arts}/>);

    const html = asFragment();
    expect(html).toMatchSnapshot();
  })
  
});
