import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ligne} from "../../../ligne/model/ligne.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Itineraire} from "../../model/itineraire.model";
import {ModalConfirmationComponent} from "../../../modal-confirmation/modal-confirmation.component";
import {DeleteLigneAction} from "../../../ligne/ngrx/ligne.actions";
import {DeleteItineraireAction} from "../../ngrx/itineraire.actions";
import {LigneDetailsComponent} from "../../../ligne/ligne-list/ligne-item/ligne-details/ligne-details.component";
import {ItineraireDetailsComponent} from "./itineraire-details/itineraire-details.component";

@Component({
  selector: 'app-itineraire-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itineraire-item.component.html',
  styleUrl: './itineraire-item.component.scss'
})
export class ItineraireItemComponent {
  @Input() itineraire: Itineraire|null=null;

  constructor(private store:Store, private router:Router,private modalService: NgbModal) {
  }

  onDelete(itineraire: Itineraire) {
    const modalRef = this.modalService.open(ModalConfirmationComponent);

    modalRef.componentInstance.confirmationMessage = "Êtes-vous sûr de vouloir supprimer cet itineraire ?";

    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.store.dispatch(new DeleteItineraireAction(itineraire));
          console.log("itineraire supprimé !");
        } else {
          console.log("Suppression annulée !");
        }
      },
      () => {
        console.log("Modal fermé sans confirmation");
      }
    );
  }

  onDetails(itineraire: Itineraire) {
    const modalRef = this.modalService.open(ItineraireDetailsComponent);
    modalRef.componentInstance.itineraireID = itineraire.id;
  }
}