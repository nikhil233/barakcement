
/*news-index*/
async function getnews() {
    let url = 'json/news-home.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderNews() {
    let news = await getnews();

    let html = '';
    news.map(news => {
        let htmlSegment = ` <div class="features-section no-margin col-md-12 col-sm-6 no-padding wow fadeInUp" data-wow-duration="1200ms"  id="news-media">
                            <div class="col-md-2 col-sm-2 col-xs-2 no-padding"><i class="icon-target  medium-icon"></i></div>
                            <div class="col-md-9 col-sm-9 col-xs-9 no-padding text-left f-right">
                                <h5 id="date-news">${news.date}:-</h5>
                                <div class="separator-line bg-yellow"></div>
                                <div class="news-content">
                                <p>${news.content}</p>
                                </div>
                            </div>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#news-home');
    container.innerHTML = html;
}
renderNews();
/*news-index -ends*/

/*news-index*/
async function getnewsmedia() {
    let url = 'json/news-media.json';
    try {
        let res1 = await fetch(url);
        return await res1.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderNewsmedia() {
    let newsmedia = await getnewsmedia();

    let html = '';
    newsmedia.map(newsmedia => {
        let htmlSegment = ` <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="features-section no-margin col-md-12 col-sm-6 no-padding wow fadeInUp" data-wow-duration="1200ms"  id="news-media">
                            <div class="col-md-2 col-sm-2 col-xs-2 no-padding"><i class="icon-target  medium-icon"></i></div>
                            <div class="col-md-9 col-sm-9 col-xs-9 no-padding text-left f-right">
                                <h5 id="date-news">${newsmedia.date}:-</h5>
                                <div class="separator-line bg-yellow"></div>
                                <div class="news-content">
                                <p>${newsmedia.content}</p>
                                </div>
                            </div>
                            </div>
                            </div>
                            `;

        html += htmlSegment;
    });

    let container = document.querySelector('#latest-update');
    container.innerHTML = html;
}
renderNewsmedia();
/*news-index -ends*/

