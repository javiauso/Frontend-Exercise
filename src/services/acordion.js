import EndPoints from '../constants/EndPoints';

class AcordionService {
  static getConfig() {
    return {
      panels: [
        {
          id: 'panel-1',
          title: '¿Qué es Milanuncios?',
          bodyText:
            'milanuncios.com es el tablón de anuncios clasificados gratuitos más popular de España según Google. En milanuncios se publican al día 85.000 anuncios, gratis todos ellos. En este portal de segunda mano, tienen cabida anuncios de compra-venta de bienes de segunda mano y nuevos, anuncios de empleo, servicios profesionales, negocios, coleccionistas, ...',
          isOpen: false
        },
        {
          id: 'panel-2',
          title: 'Publicar anuncios',
          bodyText:
            'Es gratis y es un medio ideal para contactar con posibles compradores, clientes, empleadores, ... Es muy fácil poner anuncios además de rápido. En total hay más de 10.000.000 de anuncios clasificados que se reparten en categorías variadas: motos de segunda mano, coches de ocasión, pisos de segunda mano, portátiles de segunda mano, ofertas de empleo, teléfonos de segunda mano, ...'
        },
        {
          id: 'panel-3',
          title: 'La auténtica',
          bodyText: 'La auténtica mil anuncios es esta, que no os confundan con: milanuncio, 1000anuncios, misanuncios',
          isOpen: false
        }
      ]
    };
  }

  static loadBonus() {
    return fetch(EndPoints.bonus).then(response => response.json());
  }
}

export default AcordionService;
