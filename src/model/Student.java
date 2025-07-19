package model;
import utils.NoMarksException;
public class Student extends Person implements ScholarshipEligible {
private int rollNumber;
private int[]marks;

  public Student(String name, int age, int rollNumber, int[]marks) {
	  super(name,age);
	  this.rollNumber=rollNumber;
	  this.marks=marks;
  }
  
  public int getRollNumber(){
	  return rollNumber;
  }
  public int[] getMarks() {
	  return marks;
  }
  
  public double calculateAverage()throws NoMarksException{
	  if(marks==null || marks.length==0) {
		  throw new NoMarksException("No marks available to calculate average");
	  }
	  int total=0;
	  for(int mark:marks) {
		  total+=mark;
	  }
	  return (double) total/marks.length;
  }
  @Override 
  public void displayinfo() {
	  try {
		  double avg = calculateAverage();
		  System.out.print("student:"+getName());
		  System.out.print("Roll No:"+rollNumber);
		  System.out.print("Average:"+avg);
	  }catch(NoMarksException e){
		  System.out.println("Error:"+e.getMessage());
	  }
	  
  }
  
  @Override
  public boolean isEligible() {
	  try {
		  return calculateAverage()>=75;
	  }catch(NoMarksException e) {
		  return false;
	  }
  }
  
}
