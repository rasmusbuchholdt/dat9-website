import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { SpiromagicService } from '../_services/spiromagic.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  public constructor(
    private spiromagicService: SpiromagicService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let tutorialCompleted = !this.spiromagicService.tutorialPending$.getValue();
    if (!tutorialCompleted) {
      this.router.navigateByUrl('/game/tutorial');
    }
    return tutorialCompleted;
  }
}