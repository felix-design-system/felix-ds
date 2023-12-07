import { getContrast } from 'polished'

type ColorsGridProps = {
  colors: {
    [key: string | number]: string
  }
  name?: string
}

export function ColorsGrid({ colors, name = 'default' }: ColorsGridProps) {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} className="p-8" style={{ backgroundColor: color }}>
        <div
          className="flex justify-between"
          style={{ color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff' }}
        >
          <strong className="font-mono">
            {name}
            {key !== '0' ? `-${key}` : ''}
          </strong>
          <strong className="font-mono">{color}</strong>
        </div>
      </div>
    )
  })
}
