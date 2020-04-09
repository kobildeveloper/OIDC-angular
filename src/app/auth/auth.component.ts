import { Component, OnInit } from '@angular/core';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  mIDentityProfile = "";

  constructor() { }

  ngOnInit(): void {
    /* Keycloak Authentication */

    const mIDentityOneConfig = {
      url: "https://{partnerId}.{hostname}/auth",
      realm: "your-midentity-one-oidc-tenant-id",
      clientId: "your-midentity-one-oidc-app-client-id"
    }
    let keycloak = Keycloak(mIDentityOneConfig);

    keycloak.init({ onLoad: "login-required" }).success((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      this.parseMidentityToken(keycloak.token);
    }).error((error) => {
      console.error("Authenticated failed due to \n" + error);
    });

    /* Keycloak Authentication */
  }

  parseMidentityToken(token) {
    if(token === ""){
        return null;
    }
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var authObject = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    this.mIDentityProfile = JSON.parse(authObject).name;
  };

}
