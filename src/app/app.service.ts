// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { AppLib } from './app-core/lib';
import './mycss.css';
import './mycss2.css';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  loadNeu() {
    const appLib = new AppLib();

    const myapp: any = {
      myfunction() {
        document.getElementById('info').innerHTML =
          NL_NAME +
          ' is running on port ' +
          NL_PORT +
          ' inside ' +
          NL_OS +
          '<br/><br/>' +
          '<span>v' +
          NL_VERSION +
          '</span>';
      },
    };

    Neutralino.init({
      load() {
        myapp.myfunction();
        appLib.showSettings();
      },
      pingSuccessCallback() {},
      pingFailCallback() {},
    });
  }
}
