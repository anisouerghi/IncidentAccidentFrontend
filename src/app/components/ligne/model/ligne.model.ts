import {MoyenTransport} from "../../moyens-transport/model/moyenTransport.model";
import {Station} from "../../station/model/station.model";

export enum TypeLigne {
  CIRCULAIRE = 'CIRCULAIRE',
  SPECIALE = 'SPECIALE',
  SCOLAIRE = 'SCOLAIRE',
  NUIT = 'NUIT',
  NAVETTE = 'NAVETTE'
}

export interface Ligne {
  id: number;
  code: string;
  type: string;
  moyensTransport: MoyenTransport[];
  stations: Station[];
  //itineraire: Itineraire;
  assignedToItineraire: boolean;
}
