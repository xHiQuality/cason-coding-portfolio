import "../../css/projecthighlight.css";
import { Link } from "react-router-dom";


export default function ACMOSP2023() {
    const kotlinOSP = `
    fun NavBar(items: List<NavBarItem>, navController: NavController, 
        modifier: Modifier = Modifier, onItemClick: (NavBarItem) -> Unit) {
        val backStackEntry = navController.currentBackStackEntryAsState()
        BottomNavigation(
            modifier = modifier,
            backgroundColor = BusAppTheme.colors.container,
            elevation = 5.dp
        ) {
            items.forEach { item ->
                val selected = item.route == backStackEntry.value?.destination?.route
                BottomNavigationItem(
                    selected = selected,
                    selectedContentColor = BusAppTheme.colors.positiveStatus,
                    unselectedContentColor = BusAppTheme.colors.onBackgroundSecondary,
                    onClick = { onItemClick(item) },
                    icon = {
                        Column(horizontalAlignment = CenterHorizontally) {
                            if (item.badgeCount > 0) {
                                BadgedBox(badge = 
                                { Badge { Text(item.badgeCount.toString()) } }) {
                                    Icon(
                                        imageVector = item.icon,
                                        contentDescription = item.name
                                    )
                                }
                            } else {
                                Icon(imageVector = item.icon, contentDescription = item.name)
                            }
                            if (selected) {
                                Text(
                                    text = item.name,
                                    textAlign = TextAlign.Center,
                                    fontSize = 10.sp
                                )
                            }
                        }
                    }
                )
            }
        }
    }
    `;

    const backendOSP = `
    public Stop getNearestStop(double latitude, double longitude) {
        Stop[] nearestStops = DatabaseService.getNearbyStops(latitude, longitude, DatabaseService.stopCount());

        // Determine the first stop on nearestStops that serves this Route
        Stop nearestStopOnRoute = null;
        int i = 0;
        while (nearestStopOnRoute == null && i < nearestStops.length) {
            if (Arrays.stream(nearestStops[i].getServesRoutesIds()).anyMatch(id -> id == this.routeId)) {
                nearestStopOnRoute = nearestStops[i];
            }
            i++;
        }

        return nearestStopOnRoute;
    }
    `;


    return (
        <div id="projectHighlight">
            <Link to='../' id="x-button">X</Link>
            <div id="titleSection">
            <h1>UGA Bus App &#128054;&#128652;</h1>
            <h3>ACM Open Source Club (Frontend Lead)</h3>
            </div>
            <div id="descriptionSection">
                <h2>
                    Description
                </h2>
                <p>
                Over the course of the 2023-2024 school year, me and 25 other UGA students set out to create a better functioning version of the UGA Bus App. We noticed many flaws with the GUI and functionality of API calls within the current version, which prompted us into action. Using Jetpack Compose the frontend team was able to create a prototype app that allows students to access bus routes and gather information on buses. Not only did this project cultivate frontend development skills, I was able to understand and work with a complete SDLC (Software Development Life Cycle).
                </p>
                <h4>Difficulties && Challenges</h4>
                <p>
                    Throughout the development process of this app, we came across many challenges, one of them being that the API we were using was shut down &#9785;&#65039;. We overcame this challenge by one of our members creating a random bus generator to test the routes and stops we collected in the MySQL database. Many functions were created to gather closest stops to user, as well as various information on routes and buses.
                </p>
            </div>
            <div id="codeSection">
                <h2>Some Frontend Code</h2>
                <div className="codeBox">
                {kotlinOSP}
                </div>
                <p>One of our members with guidance from me was able to put together this nav bar which serves as a navigation tool throughout the app.</p>
                <h2>Some Backend Code</h2>
                <div className="codeBox">
                {backendOSP}
                </div>
                <p>This function finds the nearest stops based on coordinates </p>
            </div>
            <div>
                <a href="https://github.com/acm-uga/ACM-OSP-Fall-2023" alt="link to the project" target="_blank">View the Repository</a>
            </div>
        </div>
    )
}



