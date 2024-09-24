import "../../css/projecthighlight.css";
import { Link } from "react-router-dom";

export default function SafeTravels() {

    const frontend = `
    import 'package:flutter/material.dart';
import 'package:zeus/core/app_export.dart';
import 'package:zeus/Globals.dart' as globals;

class HomePgScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorConstant.whiteA700,
      body: Container(
        width: size.width,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Container(
              height: getVerticalSize(
                90,
              ),
              width: size.width,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Align(
                    alignment: Alignment.center,
                    child: RichText(
                      text: TextSpan(
                        children: [
                          TextSpan(
                            text: "Safe",
                            style: TextStyle(
                              color: ColorConstant.black900,
                              fontSize: getFontSize(
                                34,
                              ),
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                          TextSpan(
                            text: "Travels",
                            style: TextStyle(
                              color: ColorConstant.green600Ce,
                              fontSize: getFontSize(
                                34,
                              ),
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                        ],
                      ),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ],
              ),
            ),
            Stack(
              children: [
                RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: "The Best Travels, ",
                        style: TextStyle(
                          color: ColorConstant.black900,
                          fontSize: getFontSize(
                            18,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      TextSpan(
                        text: "Easily Located",
                        style: TextStyle(
                          color: ColorConstant.green600Ce,
                          fontSize: getFontSize(
                            18,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                  textAlign: TextAlign.left,
                ),
                RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: "The Best Travels, ",
                        style: TextStyle(
                          color: ColorConstant.black900,
                          fontSize: getFontSize(
                            18,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      TextSpan(
                        text: "Easily Located",
                        style: TextStyle(
                          color: ColorConstant.green600Ce,
                          fontSize: getFontSize(
                            18,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                  textAlign: TextAlign.left,
                ),
              ],
            ),
            Expanded(
              child: ListView(children: globals.CountryCards),
            ),
          ],
        ),
      ),
    );
  }
}
    `;

    const backend = `
    import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'CountryInfo.dart';
import 'package:intl/intl.dart';

Future<Map<String, dynamic>> loadCountries() async {
  String jsonString = await rootBundle.loadString('assets/countries.json');
  Map<String, dynamic> countries = json.decode(jsonString);
  return countries;
}

Future<Map<String, dynamic>> fetchCountryAdvisory(String code) async {
  Uri uu = Uri.parse("https://www.travel-advisory.info/api?countrycode=$code");
  final response = await http.get(uu);
  print(response.body);

  Map<String, dynamic> info = json.decode(response.body);
  info["data"][code]["advisory"]["score"];

  return info;
}

Future<CountryInfo> getCountryInfo(String country) async {
  print('getCountries Triggered');
  Map<String, dynamic> countries = await loadCountries();

  if (countries.keys.toList().contains(country) == false) {
    throw Exception('Country Not Supported.');
  }

  String endpoint = 'https://countryapi.io/api/name/';
  String apiKey = '?apikey=6bF8zpA3ynYnx7qOqlZWzmZXuRWuqiCBvz34Uldf'; //no longer functioning
  Uri uri = Uri.parse(endpoint + country + apiKey);
  final response = await http.get(uri);
  /*print(response.body);*/
  dynamic parsedJson = jsonDecode(response.body);

  CountryInfo countryInfo =
      CountryInfo(); //New Object to store a country's information

  //Due to inconsistent Json wrappers, we loop through each and check for the values we need
  parsedJson.forEach((key, value) async {
    value.forEach((key, value) async {
      //Each if statement represents locating a desired value and assigning it to countryInfo.
      print('going through keys');
      if (key == 'name') {
        print('name found successfully');
        countryInfo.name = value;
      }
      if (key == 'alpha3Code') {
        print('code found successfully');
        countryInfo.alphaCode = value;
      }
      if (key == 'capital') {
        print('capital found successfully');
        countryInfo.capital = value;
      }
      if (key == 'population') {
        print('population found successfully');
        int tempPop = value;
        var formatter = NumberFormat.decimalPattern();
        var formattedNumber = formatter.format(tempPop);
        countryInfo.population = formattedNumber;
      }
      //The following values are located within maps, requiring deeper parsing:
      if (key == 'languages') {
        int temp = 0;
        value.forEach((key, value) {
          if (temp == 0) {
            countryInfo.language = value;
          }
          temp++;
        });
      }
      if (key == 'currencies') {
        print('currencies found successfully');
        value.forEach((key, value) {
          countryInfo.currency = value['name'];
        });
      }
    });
  });
  //Print a summary of information found:
  countryInfo.printAll();

  //ADVISORY FETCH

  String countryCode = countries[country];
  Map<String, dynamic> advisoryContent =
      await fetchCountryAdvisory(countryCode);

  print(advisoryContent);

  String score =
      advisoryContent["data"][countryCode]["advisory"]["score"].toString();
  print(score);
  countryInfo.advisoryScore = score;

  String advisoryMessage =
      (advisoryContent["data"][countryCode]["advisory"]["message"]);

  countryInfo.advisoryMessage = advisoryMessage;

  print(countryInfo.advisoryMessage);
  print(countryInfo.advisoryScore);

  return countryInfo;
} //getCountryInfo
    `;


    return (
        <div id="projectHighlight">
          <Link to='../' id="x-button">X</Link>
        <div id="titleSection">
        <h1>SafeTravels &#9992;&#65039;</h1>
        <h3>UGA Hacks 8</h3>
        </div>
        <div id="descriptionSection">
            <h2>
                Description
            </h2>
            <p>
            During UGA Hacks 8, me and 3 other hackers completed this Android moblie app that allows users to search and save countries around the world that they want to visit. After only learning Flutter 2 days before the event,
            me and the group were able to complete a functioning app, minus a few bugs that couldn't be sorted out within the 48 hours. We used web APIs to access various facts and safety concerns for countries around the world.
            A demo of our app can be found below.
            </p>
            
            <h4>Learning Flutter</h4>
            <p>
            This project was my first ever experience in mobile development as well as using Flutter. I hadn't at this time done any frontend work including web dev.
            Understanding the concept of placing components within components to create a DOM tree was valuable knowledge that I retained from this project. 
            </p>
        </div>
        <div id="codeSection">
            <h2>Some Frontend Code</h2>
            <div className="codeBox">
            {frontend}
            </div>
            <p>This code shows the creation of the homepage of the mobile app</p>
            <h2>Some Backend Code</h2>
            <div className="codeBox">
            {backend}
            </div>
            <p>
            Logic for parsing the API and gathering required data
            </p>
        </div>
        <div>
        <a className="demo"  href="https://youtu.be/3XROlXdFC6M?si=F9Dg8Fcu5DTn9_DX" target="_blank">Demo</a>
            <a href="https://github.com/MiguelDelao/Safe-Travels" alt="link to github repo" target="_blank">View the Repository</a>
        </div>
    </div>
    )
}