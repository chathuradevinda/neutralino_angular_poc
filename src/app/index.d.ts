declare const NL_VERSION: string;
declare const NL_NAME: string;
declare const NL_OS: string;
declare const NL_PORT: string;


declare namespace Neutralino {
    function init(options: any): void;
    namespace settings {
        function getSettings(s: any, f: any): void;
    }
}
