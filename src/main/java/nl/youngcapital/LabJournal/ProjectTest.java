package nl.youngcapital.LabJournal;

import static org.junit.Assert.*;

import org.junit.Test;

public class ProjectTest {
	@Test
	public void testProjectName () {
		Project project = new Project();
		String name = "Making Gold";
		project.setName(name);
		assertEquals(project.getName(), name);
				
	}

}
