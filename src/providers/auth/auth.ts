import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

    url = 'http://localhost:9000/login';
    
    constructor(public http: HttpClient) { }

    public login(pass){
        let ciphertext = CryptoJS.AES.encrypt(pass, 'secret key 123');
        console.log(ciphertext.toString());
        let bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        console.log(plaintext);
        if(plaintext == 'Jony'){
            return true;
        }
        return false;
        //this.http.post(this.url,{ password:  pass}).map(res => { return res['usuario']; });
    } 

}
