import { DayDeckRenderer } from '../../../types';
import { day01Deck } from './slides/day-01';
import { day02Deck } from './slides/day-02';
import { day03Deck } from './slides/day-03';
import { day04Deck } from './slides/day-04';
import { day05Deck } from './slides/day-05';
import { day06Deck } from './slides/day-06';
import { day07Deck } from './slides/day-07';
import { day08Deck } from './slides/day-08';
import { day09Deck } from './slides/day-09';
import { day10Deck } from './slides/day-10';
import { day11Deck } from './slides/day-11';
import { day12Deck } from './slides/day-12';
import { day13Deck } from './slides/day-13';
import { day14Deck } from './slides/day-14';

// 14 天 deck：每天 20 页自定义 slide 组件，由 day-XX.tsx 直接导出 DayDeckRenderer
export const ALL_COURSE_DECKS: DayDeckRenderer[] = [
  day01Deck,
  day02Deck,
  day03Deck,
  day04Deck,
  day05Deck,
  day06Deck,
  day07Deck,
  day08Deck,
  day09Deck,
  day10Deck,
  day11Deck,
  day12Deck,
  day13Deck,
  day14Deck,
];
