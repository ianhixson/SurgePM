#!/bin/sh
# Must be executed from within SurgePM directory

# Query and record uber prices
# For Portland areas defined in ZoneNames2.txt which was made from ZoneNames.txt

# Make sure something happens
echo "start"

authToken="qJxLLD_mhPA3vQYt-z3nYoNxRuZpuP2Xcl8jXiat"
location="Locations/ZoneNames2.txt"
output="out.txt"	# If there was no out.txt, it is made. Else, it uses current out.txt
count=0

# Add date to new line in file out.txt
date >> $output

# While there is a line in $location,
# curl appropriate longitude and latitude
# then awk the surge info and output to out.txt
cat $location | while read line
do
	# Set up curl
	# Find latitude and longitude
	latitude=`echo "$line" | awk -F',' '{print $1}'`
	longitude=`echo "$line" | awk -F',' '{print $2}'`

	# Make url 
	url="https://api.uber.com/v1/estimates/price?start_latitude=$latitude&start_longitude=$longitude&end_latitude=$latitude&end_longitude=$longitude"
	# Make header
	header="Authorization: Token $authToken"

	# Get info from uber api 
	input=`curl -H "$header" "$url"`

	# Filter input and find surge price with awk
	surge=`echo "$input" | awk -F',' '{print $10}'` 

	# Start output 
	zone=`echo "$line" | awk -F',' '{print $3}'`
	printf "$surge\t$zone\n" >> $output


	let count++
done

# Add new line after out for human readability
printf "\n" >> $output

# See what happened
cat out.txt
