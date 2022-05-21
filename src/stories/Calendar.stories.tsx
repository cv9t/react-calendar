/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Box } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Calendar as CalendarComponent, CalendarProps } from '../components';

export default {
  title: 'Calendar',
  component: CalendarComponent,
} as ComponentMeta<typeof CalendarComponent>;

const Template: ComponentStory<typeof CalendarComponent> = (args: CalendarProps) => (
  <Box sx={{ height: '100vh' }}>
    <CalendarComponent {...args} />
  </Box>
);

export const Calendar = Template.bind({});
Calendar.args = {
  startDate: new Date(),
  withoutBorder: true,
};
