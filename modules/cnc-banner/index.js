export default class CNCBanner {
    static name = 'CNCBanner';
    static version = '1.0';
    static dependencies = ['IOHook', 'SiteInformation', 'ModuleManager'];
    static description = 'This module sets the banner for the CNC server.';

    onLoad() {
        const {IOHook, SiteInformation} = DWEM.Modules;

        IOHook.handle_message.before.push((data) => {
            if (data.msg === 'html' && data.id === 'banner') {
                data.content = `
                    <a href="https://refracta.github.io/nemelx-alter-3d" id="coloredText">It's all in the cards!</a>
                    <br>
                    ${SiteInformation.current_user ? `
                    <a href="https://webtiles.nethack.live" style="font-size: small; margin: 0; padding:0; text-decoration: none"> Did you know that NetHack can be played on WebTiles? </a>
                    <br>` : ''}
                    <details>
                        <summary style="cursor: pointer;">We have started the server using the user database from <a href="https://crawl.project357.org">CPO</a> as of KST 2024.06.19 14:12:00.</summary>
                        <div>
                            <p>This is simply a method to prevent account griefing. If you have accounts with different owners across multiple servers, we will not consider those account owners as the owners of the CPO account. The appeal period is one year. If you manually submit credentials from other servers to me by <strong>June 2025</strong>, the account will be transferred to the earliest requester.</p>
                            <p><strong>[How to Submit Credentials]</strong><br>
                                Log into the other server, add the line "# CRAWL.NEMELEX.CARDS" at the top of the trunk RC file, and then submit the <a href="#" onclick="openRCLinks()">RC link</a> to me (<a href="https://discord.com/invite/mNcPSDendT">Server Discord - cnc-account-migration Channel</a>). After receiving the account, add and maintain the line "# CRAWL.NEMELEX.CARDS" at the top of the CNC account's trunk RC file until the appeal period ends. Additionally, CPO users in this situation should add the line "# CRAWL.NEMELEX.CARDS" at the top of the trunk RC file on this server. If this line is present, I will consider the CPO account user as the earliest requester.</p>
                            <p>KST 2024.06.19 19:00:00 Updated: When you log into the this server for the first time, the line "# CRAWL.NEMELEX.CARDS" is automatically inserted into the trunk RC.</p>
                            <p>For users who registered between KST 2024.06.18 00:00:00 and 2024.06.18 07:03:00, the account credentials have been switched to CPO's (game data will be retained). If you encounter any issues logging in, please contact me.</p>
                        </div>
                    </details>
                    <script>
                        function openRCLinks() {
                            const textContent = \`[CDI]
https://crawl.dcss.io/crawl/rcfiles/crawl-git/%n.rc

[CDO]
https://crawl.develz.org/configs/trunk/%n.rc

[CAO]
https://crawl.akrasiac.org/rcfiles/crawl-git/%n.rc

[CUE]
https://underhound.eu/crawl/rcfiles/crawl-git/%n.rc

[CBRO2]
https://cbro.berotato.org/rcfiles/crawl-git/%n

[LLD]
http://lazy-life.ddo.jp/mirror/meta/0.31/rcfiles/%n.rc
(You can use 0.31 version RC)

[CWZ]
https://webzook.net/soup/rcfiles/trunk/%n.rc

[CXC]
https://crawl.xtahua.com/crawl/rcfiles/crawl-git/%n.rc
\`;
                            const newWindow = window.open("", "_blank", "width=600,height=400");
                            newWindow.document.open();
                            newWindow.document.write("<!DOCTYPE html><html><head><title>RC Links</title></head><body><pre>" + textContent + "</pre></body></html>");
                        }
                    </script>
                    <p style="padding:5px; border-radius:10px; background-color:#2c6f17; display:inline-block; margin:20px 0 10px 0; line-height:1.3;">
                        <a href="https://archive.nemelex.cards">Player Data</a> -
                        <a href="https://github.com/refracta/dcss-server/issues">Report a Bug</a> -
                        <a href="javascript:DWEM.Modules.ModuleManager.toggle()">DWEM Module Manager</a>
                        <br>
                        SSH is available on port 1326 with the user 'nemelex'. You can use the password 'xobeh' or authenticate using the <a href="https://archive.nemelex.cards/cao_key" style="text-decoration:none;">CAO key</a>.
                        <br>
                        Please read and follow the <a href="https://archive.nemelex.cards/code_of_conduct.txt">Code of Conduct</a> for this server.
                        <br>
                        For account or server issues, contact ASCIIPhilia on <a href="https://discord.com/invite/mNcPSDendT">Server Discord</a>.
                    </p>
                    ${SiteInformation.current_user ? `
                    <p>
                        Hello, ${SiteInformation.current_user}! View your <a href="https://archive.nemelex.cards/morgue/${SiteInformation.current_user}/">morgues</a> <a href="https://archive.nemelex.cards/ttyrec/${SiteInformation.current_user}/">ttyrecs</a>.
                    </p>
                    <script>
                        function getRandomColor() {
                            const colors = ['#ff4000', '#008cc0', '#cad700', '#009800', '#8000ff'];
                            return colors[Math.floor(Math.random() * colors.length)];
                        }

                        function colorizeText() {
                            const text = "It's all in the cards!";
                            const words = text.split(" ");
                            const coloredWords = words.map(word => \`<span style="color:\${getRandomColor()};">\${word}</span>\`);
                            document.getElementById('coloredText').innerHTML = coloredWords.join(" ");
                        }

                        colorizeText();
                    </script>
                    ` : ''}
                `;
            }
        });
    }
}
