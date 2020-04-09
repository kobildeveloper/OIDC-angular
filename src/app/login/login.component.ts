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

    const mIDentityOneConfig = {
      url: "https://{partnerId}.{hostname}/auth",
      realm: "your-midentity-one-oidc-tenant-id",
      clientId: "your-midentity-one-oidc-app-client-id"
    }
    let keycloak = Keycloak(mIDentityOneConfig);

    keycloak.init({ onLoad: "login-required", redirectUri: window.location.origin + "/auth" }).success((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      sessionStorage.setItem("mIDentityOne-token", keycloak.token);
    }).error((error) => {
      console.error("Authenticated failed due to \n" + error);
    });

  }
  /* Keycloak Authentication */

}
