export const shipping = {
  woNum: 1234,
  woStatusText: 'In Progress',
  cancelable: true,
  reopenable: true,
  creationDate: '2020-05-23',
  activities: [
    {
      activityCode: 'RCC',
      status: 'completed',
      activityStart: {
        startDate: '2020-05-25',
        startTime: '08:47:00',
      },
      activityFinish: {
        finishDate: '2020-05-25',
        finishTime: '08:47:00',
      },
      customerMessage: 'Programming a frontend is nice!',
    },
    {
      activityCode: 'SM1',
      status: 'active',
      activityStart: {
        startDate: '2020-05-25',
        startTime: '08:47:00',
      },
      activityFinish: {
        finishDate: '2020-05-25',
        finishTime: '08:47:00',
      },
      customerMessage: 'But Backend is even nicer!',
    },
  ],
};
