import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
  mdiCity
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    label: 'Generales',
    icon: mdiViewList,
    menu: [
      {
        href: '/telefonos',
        label: 'Axio',
        icon: mdiTable,
      },
      {
        href: '/departamento',
        icon: mdiMonitor,
        label: 'Fetch',
      },
      {
        href: '/aldea',
        icon: mdiCity,
        label: 'Aldea',
      },
    ],
  },

]

export default menuAside
