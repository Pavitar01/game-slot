export type TimeUnit = {
  time: string
  text: 'days' | 'hrs' | 'min' | 'sec'
}

export const times: TimeUnit[] = [
  {
    time: '20',
    text: 'days',
  },
  {
    time: '05',
    text: 'hrs',
  },
  {
    time: '20',
    text: 'min',
  },
  {
    time: '35',
    text: 'sec',
  },
]
