import { Component, OnInit } from '@angular/core';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Keycloak Authentication */
  authenticateLogin(){

    const mIDentityBoxConfig = {
      url: "https://{partnerId}.{hostname}/auth",
      realm: "your-midentity-box-oidc-tenant-id",
      clientId: "your-midentity-box-oidc-app-client-id"
    }
    let keycloak = Keycloak(mIDentityBoxConfig);

    keycloak.init({ onLoad: "login-required", redirectUri: window.location.origin + "/auth" }).success((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      sessionStorage.setItem("mIDentityBox-token", keycloak.token);
    }).error((error) => {
      console.error("Authenticated failed due to \n" + error);
    });

  }
  /* Keycloak Authentication */

}
