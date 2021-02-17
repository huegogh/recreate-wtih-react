export function Tabs() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-sm-10 px-0 px-sm-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item tab" role="presentation">
                        <a className="nav-link shadow active" id="graphics-tab" data-toggle="tab" href="#graphics" role="tab /"
                            aria-controls="graphics" aria-selected="true">Graphics</a>
                    </li>
                    <li className="nav-item tab" role="presentation">
                        <a className="nav-link shadow" id="narrative-tab" data-toggle="tab" href="#narrative" role="tab /"
                            aria-controls="narrative" aria-selected="false">Narrative</a>
                    </li>
                    <li className="nav-item tab" role="presentation">
                        <a className="nav-link shadow" id="design-tab" data-toggle="tab" href="#design" role="tab /"
                            aria-controls="design" aria-selected="false">Level Design</a>
                    </li>
                    <li className="nav-item tab" role="presentation">
                        <a className="nav-link shadow" id="audio-tab" data-toggle="tab" href="#audio" role="tab /"
                            aria-controls="audio" aria-selected="false">Audio</a>
                    </li>
                    <li className="nav-item tab" role="presentation">
                        <a className="nav-link shadow" id="code-tab" data-toggle="tab" href="#code" role="tab /"
                            aria-controls="code" aria-selected="false">Code</a>
                    </li>
                </ul>
                <div className="tab-content bgPurple text-white py-5" id="myTabContent">
                    <div className="tab-pane px-4 fade show active" id="graphics" role="tabpanel" aria-labelledby="graphics-tab">This is inside of the tab graphics
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane px-4 fade" id="narrative" role="tabpanel" aria-labelledby="narrative-tab">This is inside of the tab narrative
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane px-4 fade" id="design" role="tabpanel" aria-labelledby="design-tab">This is inside of the tab design
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane px-4 fade" id="audio" role="tabpanel" aria-labelledby="audio-tab">This is inside of the tab audio
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane px-4 fade" id="code" role="tabpanel" aria-labelledby="code-tab">This is inside of the tab code
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}