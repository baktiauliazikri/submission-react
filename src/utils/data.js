const getInitialData = () => ([
  {
    id: 1,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: true,
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada mi. Etiam mollis quam eu rhoncus iaculis. Pellentesque elementum urna dui, et semper nulla efficitur a. Integer nec euismod erat, ac ultricies lorem. Sed sodales blandit lobortis. In commodo ultrices velit, et pharetra orci mollis in. Aenean sit amet nisi nec mi convallis rhoncus.",
    createdAt: '2023-09-20T04:27:34.572Z',
    archived: true,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
