import React from "react";

const CoronaCaseComp: React.FC = () => {
  return (
    <section id="cases" className="cases section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="arraw test">
              <i className="fas fa-long-arrow-alt-down"></i>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <div className="w-heading">
              <h2>Corona Virus Case</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="case-content table-wrapper-scroll-y my-custom-scrollbar">
              <div className="case-box">
                <div className="case-table">
                  <table className="table table-bordered ">
                    <tr>
                      <th>Country</th>
                      <th>Coronavirus Cases</th>
                      <th>New Cases</th>
                      <th>New Deaths</th>
                      <th>Total Deaths</th>
                      <th>Total Recovered</th>
                      <th>Active Cases</th>
                      <th>Critical</th>
                    </tr>
                    <tr>
                      <td>Whole World</td>
                      <td>4,217,357</td>
                      <td>+39,203 284</td>
                      <td>+1,000</td>
                      <td>284,734</td>
                      <td>1,506,479</td>
                      <td>2,426,144</td>
                      <td>47,060</td>
                    </tr>
                    <tr>
                      <td>USA</td>
                      <td>1,369,943</td>
                      <td>+2,305</td>
                      <td>+859</td>
                      <td>80,846</td>
                      <td>256,345</td>
                      <td>1,032,752</td>
                      <td>16,514</td>
                    </tr>
                    <tr>
                      <td>Spain</td>
                      <td>268,143 </td>
                      <td>268,143 </td>
                      <td>+124</td>
                      <td>26,744</td>
                      <td>177,846</td>
                      <td>63,553</td>
                      <td>1,650</td>
                    </tr>
                    <tr>
                      <td>UK</td>
                      <td>223,060</td>
                      <td>+3,877</td>
                      <td>+210</td>
                      <td>+210</td>
                      <td>11,264</td>
                      <td>190,651</td>
                      <td>1,559</td>
                    </tr>
                    <tr>
                      <td>Russia</td>
                      <td>221,344</td>
                      <td>+11,656</td>
                      <td>+94</td>
                      <td>2,009</td>
                      <td>39,801</td>
                      <td>179,534</td>
                      <td>2,300</td>
                    </tr>
                    <tr>
                      <td>Italy</td>
                      <td>219,070</td>
                      <td>+9,656</td>
                      <td>1,060</td>
                      <td>30,560</td>
                      <td>105,186</td>
                      <td>83,324</td>
                      <td>1,027</td>
                    </tr>
                    <tr>
                      <td>France</td>
                      <td>194,392</td>
                      <td>+8,203</td>
                      <td>932</td>
                      <td>27,734</td>
                      <td>97,102</td>
                      <td>81,324</td>
                      <td>952</td>
                    </tr>
                    <tr>
                      <td>Germany</td>
                      <td>171,999</td>
                      <td>+120</td>
                      <td>263</td>
                      <td>7,569</td>
                      <td>145,600</td>
                      <td>18,830</td>
                      <td>1,581</td>
                    </tr>
                    <tr>
                      <td>Brazil</td>
                      <td>163,510</td>
                      <td>+811</td>
                      <td>+84</td>
                      <td>11,207</td>
                      <td>64,957</td>
                      <td>87,346</td>
                      <td>8,318</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-bar">
              <a href="https://covid19.ncdc.gov.ng/" className="">
                Watch Full Stats
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoronaCaseComp;
