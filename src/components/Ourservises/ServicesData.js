import integration from '../../assets/images/it_services/data-integration_icon.svg'
import warehousing from '../../assets/images/it_services/data-warehoising_icon.svg'
import infrastructure from '../../assets/images/it_services/cloud-infrostructure.svg'
import self from '../../assets/images/it_services/self-srvices.svg'

const ServicesDta = () => {
  return [
    {
        id: 1, img: integration, title: 'Data Integration',
        description: 'Lorem insum lorem insum lorem insum lorem insum'
    },
    {
        id: 2, img: warehousing, title: 'Data Warehousing & Analytics',
        description: 'Free consultation with our proffesionals and get the best recomendations'
    },
    {
        id: 3, img: infrastructure, title: 'Cloud Infrastructure Automation',
        description: 'Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum '
    },
    {
        id: 4, img: self, title: 'Self Service BI',
        description: 'Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum '
    },
]

}

export default ServicesDta